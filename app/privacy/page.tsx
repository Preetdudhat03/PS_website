import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Klypt",
    description: "Privacy Policy for Klypt - Offline Password Manager. No tracking, no accounts, zero-knowledge.",
};

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] px-4 py-16 text-left">
            <div className="max-w-3xl w-full space-y-8">

                <div className="border-b border-white/10 pb-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Last Updated: February 07, 2026
                    </p>
                </div>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">1. Introduction</h2>
                        <p>
                            Klypt is an offline, zero-knowledge password manager designed with privacy as its primary goal. Unlike many commercial password managers, Klypt operates entirely on your device. It does not connect to the internet, does not have a central server, and does not require an account.
                        </p>
                        <p className="mt-2">
                            We believe that your passwords belong only to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">2. Information We Do NOT Collect</h2>
                        <p>We want to be perfectly clear about what we do <strong>not</strong> do:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>No Personal Data Collection:</strong> We do not collect your name, email, phone number, or IP address.</li>
                            <li><strong>No Analytics:</strong> We do not track how you use the app or which buttons you click.</li>
                            <li><strong>No Tracking:</strong> We do not use cookies, advertising IDs, or tracking pixels.</li>
                            <li><strong>No Accounts:</strong> You do not create an account with us. There is no login server.</li>
                            <li><strong>No Server Communication:</strong> The app has no internet permissions (other than what the operating system might require for local network discovery, which we do not use) and sends no data to us or anyone else.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">3. Information Stored on Your Device</h2>
                        <p>All the data you enter into Klypt (usernames, passwords, notes, categories) is stored locally on your specific device.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>Encryption:</strong> Your data is encrypted using industry-standard AES-256 encryption.</li>
                            <li><strong>Local Only:</strong> This encrypted data remains on your device's internal storage. It never leaves your device unless you explicitly choose to export a backup.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">4. Backup Files</h2>
                        <p>Klypt allows you to create encrypted backup files to protect against data loss.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>User Control:</strong> You choose where to save these files (e.g., your phone's storage, a USB drive, or a cloud storage provider of your choice).</li>
                            <li><strong>No Access:</strong> We (the developer) have absolutely no access to your backup files. We cannot decrypt them, and we cannot recover them for you.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">5. Biometric Authentication</h2>
                        <p>Klypt supports unlocking using your device's biometric features (Fingerprint, Face Unlock).</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>OS Handled:</strong> Biometric authentication is handled entirely by your device's operating system (Android/iOS).</li>
                            <li><strong>No Access:</strong> Klypt receives only a "Yes/No" confirmation from the system. We never access, store, or transmit your actual biometric data (fingerprint or face map).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">6. Third-Party Services</h2>
                        <p>Klypt is a standalone application.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>No Ads:</strong> The app does not display advertisements.</li>
                            <li><strong>No Analytics SDKs:</strong> We do not include third-party code (like Google Analytics, Firebase Analytics, or Facebook Pixel) that monitors your behavior.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">7. Data Loss Disclaimer</h2>
                        <p>Because Klypt is a zero-knowledge, offline system, <strong>we cannot recover your data if you lose access.</strong></p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>Lost Device:</strong> If you lose your device and do not have a backup, your passwords are lost.</li>
                            <li><strong>Forgotten Master Password:</strong> If you forget your Master Password, there is no "Forgot Password" link. Your data remains encrypted forever.</li>
                            <li><strong>Responsibility:</strong> We deliberately chose this design to ensure no one—not even us—can access your data without your permission.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">8. Children’s Privacy</h2>
                        <p>
                            Klypt is a utility tool not specifically intended for children. However, because we do not collect any personal data whatsoever, the privacy of all users, including minors, is inherently protected.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy to reflect changes in the app's functionality or legal requirements. Any changes will be posted clearly in the app's repository or release notes. Since the app is offline, "push" notifications of policy changes are not possible; please check the repository for the latest version.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">10. Contact</h2>
                        <p>Klypt is developed and maintained by <strong>Preet Dudhat</strong>.</p>
                        <p className="mt-4">
                            If you have questions about this policy or the app's privacy practices, please reach out via GitHub:
                            <br />
                            <a href="https://github.com/Preetdudhat03/password_manager_app" className="text-white hover:underline break-all" target="_blank" rel="noopener noreferrer">
                                https://github.com/Preetdudhat03/password_manager_app
                            </a>
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
