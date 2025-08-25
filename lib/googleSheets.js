// lib/googleSheets.js
import { google } from "googleapis";

export const SPREADSHEET_ID = "1zGt5JQcu9IOPxCRgwPV3KwcyEMzkdL7TckqIs4oNZqo"; // from Google Sheets URL

export async function getSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
}
