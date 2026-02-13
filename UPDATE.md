# 🚀 How to Release a New Version of Klypt

Follow this checklist to release a new version of the app on the website. This update process ensures both the **Download Page** and the **In-App Update Checker** receive the correct information.

## 1. 📦 Add the ZIP File
1.  **Upload** your `klypt.zip` file to the `public/` folder.
    *   Currently, the website is configured to always serve `public/klypt.zip`.
    *   ⚠️ **Note:** If you want to keep old versions, rename them before uploading the new `klypt.zip`.

---

## 2. 📝 Update Website Display (`lib/version.ts`)
This file controls what users see on the **Download Page** and in the **Footer**.

1.  Open `lib/version.ts`.
2.  Update the `latestVersion` object with the new details:

```typescript
export const latestVersion = {
  version: "1.1.0",           // 👈 Update version
  build: 2,                   // 👈 Update build number
  releaseDate: "2026-03-01",  // 👈 Update date
  downloadUrl: "https://klypt.vercel.app/download",
  changelog: [                // 👈 Add features/fixes here
    "Added search feature",
    "Fixed login bug"
  ]
};
```

---

## 3. 🤖 Update App JSON (`public/version.json`)
This file is **CRITICAL**. The Klypt mobile app reads this file to check for updates. If this is wrong, users won't get notified.

1.  Open `public/version.json`.
2.  Update the fields to **match exactly** what you put in `lib/version.ts`.

```json
{
  "app_name": "Klypt",
  "platform": "android",
  "version": "1.1.0",          // 👈 MUST match
  "build": 2,                  // 👈 MUST match
  "release_date": "2026-03-01",
  "download_url": "https://klypt.vercel.app/download",
  "changelog": [
    "Added search feature",
    "Fixed login bug"
  ],
  "minimum_supported_version": "1.0.0" // ⚠️ Only change if you want to FORCE updates
}
```

---

## 4. 🚀 Deploy
1.  **Commit** your changes to git.
2.  **Push** to your repository.
3.  **Wait** for Vercel to finish building.

## ✅ Verification
After deployment, check these URLs to confirm everything updated correctly:

1.  **Metadata:** [https://klypt.vercel.app/version.json](https://klypt.vercel.app/version.json)
    *   *Check if the version number is new.*
2.  **Download Page:** [https://klypt.vercel.app/download](https://klypt.vercel.app/download)
    *   *Check if the "Latest Release" badge shows the new version.*
    *   *Click "Download APK" and ensure it downloads the new file.*
