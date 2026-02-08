import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions | Klypt",
    description: "Terms and Conditions for Klypt - Offline Password Manager. Learning-focused micro project.",
};

export default function TermsAndConditions() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] px-4 py-16 text-left">
            <div className="max-w-3xl w-full space-y-8">

                <div className="border-b border-white/10 pb-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Last Updated: February 07, 2026
                    </p>
                </div>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, or using the Klypt mobile application ("App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">2. Nature of the App</h2>
                        <p>
                            Klypt is a personal, open-source micro project developed for educational and experimental purposes.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>Not a Commercial Service:</strong> Klypt is not a commercial Software-as-a-Service (SaaS) product.</li>
                            <li><strong>As-Is:</strong> It is provided as a standalone utility without dedicated customer support or enterprise-level guarantees.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">3. No Warranty</h2>
                        <p className="font-semibold text-white mb-2">
                            The App is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied.
                        </p>
                        <p>
                            To the fullest extent permitted by law, the developer disclaims all warranties, including but not limited to:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li>Fitness for a particular purpose.</li>
                            <li>Absolute security of data.</li>
                            <li>Freedom from bugs or errors.</li>
                        </ul>
                        <p className="mt-2">
                            We do not claim that the App has been audited by a third-party security firm. Use it at your own discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">4. User Responsibility</h2>
                        <p>
                            Klypt is designed to give you full control over your data. This means you also bear full responsibility for it.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>Master Password:</strong> You are solely responsible for remembering your Master Password. <strong>There is no recovery mechanism.</strong> If you forget it, your data is permanently inaccessible.</li>
                            <li><strong>Backups:</strong> You are solely responsible for creating and maintaining backups of your data. We recommend keeping backups in multiple secure locations.</li>
                            <li><strong>Device Security:</strong> You are responsible for keeping your device secure and free from malware that could compromise the App.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">5. Limitation of Liability</h2>
                        <p>
                            In no event shall the developer (Preet Dudhat) be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the App.
                        </p>
                        <p className="mt-2">This includes, but is not limited to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>Data Loss:</strong> Loss of passwords or data due to forgotten keys, device loss, or app malfunction.</li>
                            <li><strong>Security Breaches:</strong> Unauthorized access to your data caused by device compromise, malware, or weak Master Passwords.</li>
                            <li><strong>Misuse:</strong> Any damages resulting from the use of the App for illegal or unauthorized purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">6. Security Disclaimer</h2>
                        <p>
                            While Klypt uses industry-standard encryption (AES-256) and security best practices, no software is 100% secure.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li>Security depends heavily on your behavior (e.g., choosing a strong Master Password, not rooting/jailbreaking your device).</li>
                            <li>The App reduces risk significantly by working offline, but it cannot eliminate all risks inherent in digital technology.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">7. Intellectual Property</h2>
                        <p>
                            The code for Klypt is owned by the developer, Preet Dudhat.
                            If the project is released under an Open Source license (e.g., MIT, Apache 2.0), the terms of that license apply to the use, modification, and distribution of the source code. Please refer to the <code className="bg-white/10 px-1 py-0.5 rounded text-sm">LICENSE</code> file in the repository for specific details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">8. Termination</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                            <li><strong>By You:</strong> You may stop using the App at any time by uninstalling it.</li>
                            <li><strong>By Developer:</strong> The developer reserves the right to discontinue the project or stop providing updates at any time without notice.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">9. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. Your continued use of the App following any changes indicates your acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">10. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the developer's jurisdiction, without regard to its conflict of law provisions.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
