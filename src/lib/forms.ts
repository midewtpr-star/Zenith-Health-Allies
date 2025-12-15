export type SheetsResponse = {
  success: boolean;
  message?: string;
};

/**
 * Submit form payload directly to Google Apps Script Web App.
 * Uses `VITE_SHEETS_ENDPOINT_URL` and avoids CORS preflight by sending as text.
 * In no-cors mode the browser will not expose the response; we assume success if the network did not error.
 */
export async function submitToSheets(formId: string, data: Record<string, any>): Promise<SheetsResponse> {
  const endpoint = import.meta.env.VITE_SHEETS_ENDPOINT_URL;
  if (!endpoint) {
    return {
      success: false,
      message: 'Missing VITE_SHEETS_ENDPOINT_URL environment variable',
    };
  }

  const payload = {
    formId,
    timestamp: new Date().toISOString(),
    data,
  };

  try {
    await fetch(endpoint, {
      method: 'POST',
      // Send as a "simple request" to avoid preflight and use no-cors to allow the browser to send it
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload),
    });

    // We cannot read the response in no-cors mode; treat as success if no exception.
    return { success: true };
  } catch (err: any) {
    return { success: false, message: err?.message || 'Network error' };
  }
}