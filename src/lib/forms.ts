export type SheetsResponse = {
  success: boolean;
  message?: string;
};

/**
 * Submit form payload to a spreadsheet-backed endpoint.
 * Expects an environment variable `VITE_SHEETS_ENDPOINT_URL` pointing to a Web App.
 */
export async function submitToSheets(formId: string, data: Record<string, any>): Promise<SheetsResponse> {
  const endpoint = import.meta.env.VITE_SHEETS_ENDPOINT_URL;
  if (!endpoint) {
    return {
      success: false,
      message: 'Missing VITE_SHEETS_ENDPOINT_URL environment variable',
    };
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formId,
        timestamp: new Date().toISOString(),
        data,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return { success: false, message: text || `HTTP ${res.status}` };
    }

    const json = (await res.json()) as SheetsResponse;
    return json.success !== undefined ? json : { success: true };
  } catch (err: any) {
    return { success: false, message: err?.message || 'Network error' };
  }
}