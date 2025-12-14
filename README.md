# Zenith Health Allies Website

Official website for Zenith Health Allies — Nursing services, healthcare training, and staffing solutions in Maryland.

- Official domain: https://zenithhealthallies.org/
- Tech stack: Vite, React, TypeScript, Tailwind CSS, shadcn-ui

## Local Development

Prerequisites: Node.js and npm installed.

```sh
npm install
npm run dev
```

## SEO Setup

- Canonical and social meta tags set in `index.html` for `zenithhealthallies.org`.
- `public/robots.txt` allows crawling and references the sitemap.
- `public/sitemap.xml` lists core routes for better indexing.
- Optional: add route-level meta via `react-helmet-async` for per-page titles and descriptions.

## Project Structure

- `src/pages` — route components
- `src/components` — UI and layout components
- `public` — static assets (`favicon.ico`, `robots.txt`, `sitemap.xml`)

## Deployment

Build and serve the static site with any hosting that supports SPAs.

```sh
npm run build
npm run preview
```

## Forms Backend (Google Sheets + Email)

Use a Google Sheet as the backend for the Contact and Careers forms and send an email to the admin on each new submission.

1. Create a Google Sheet named `Website Submissions`.
2. Open `Extensions > Apps Script` and paste the script below.
3. In `Deploy > New deployment`, choose `Web app`, set `Execute as: Me` and `Who has access: Anyone`.
4. Copy the Web App URL and set it in an environment variable `VITE_SHEETS_ENDPOINT_URL`.

Apps Script code:

```js
function doPost(e) {
  const adminEmail = 'hello@moheritagecares.com'; // change if needed
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'Submissions';
  const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

  const body = JSON.parse(e.postData.contents || '{}');
  const formId = body.formId || 'unknown';
  const data = body.data || {};
  const timestamp = new Date();

  // Initialize headers on first run
  if (sheet.getLastRow() === 0) {
    const headers = ['Timestamp', 'Form'].concat(Object.keys(data));
    sheet.appendRow(headers);
  }

  const row = [timestamp, formId].concat(Object.keys(data).map(k => String(data[k] ?? '')));
  sheet.appendRow(row);

  // Send email notification
  const html = '<p><b>New ' + formId + ' submission</b></p>' +
               Object.keys(data).map(k => '<p><b>' + k + ':</b> ' + String(data[k]) + '</p>').join('');
  MailApp.sendEmail({
    to: adminEmail,
    subject: 'New ' + formId + ' submission',
    htmlBody: html,
  });

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Environment:

- Create `.env` (or `.env.local`) with `VITE_SHEETS_ENDPOINT_URL="<your web app url>"`
- Restart the dev server after setting environment variables.

The frontend is already wired to POST JSON to this endpoint for both forms.

## Notes

- Removed references to Lovable.
- Vite config no longer includes Lovable plugins.
