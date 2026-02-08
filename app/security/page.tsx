import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Security Model | Klypt",
    description: "Understanding Zero-Knowledge encryption and local-only security model of Klypt.",
};

export default function SecurityPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-left">
            <div className="border-b border-white/10 pb-8 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-4">
                    Security Model
                </h1>
                <p className="text-xl text-gray-400 font-light">
                    Transparency is security. Here is exactly how Klypt works.
                </p>
            </div>

            <div className="space-y-16">
                {/* 1. Overview */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-white">1. Overview</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                        <p>
                            Klypt is built on a foundation of absolute privacy. Our security model is simple:
                            <strong> we cannot lose, sell, or leak your data because we never have it.</strong>
                        </p>
                        <p className="mt-4">
                            Klypt operates entirely offline. It does not trust the network, and it does not trust the developer.
                            By removing the cloud from the equation, we eliminate entire classes of remote attacks, data breaches,
                            and server-side vulnerabilities. Zero-knowledge is not just a feature; it is the architectural standard
                            of the entire application.
                        </p>
                    </div>
                </section>

                {/* 2. Zero-Knowledge Architecture */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-white">2. Zero-Knowledge Architecture</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Zero-knowledge means that Klypt knows nothing about your data. The architecture is designed
                        so that the developer has no technical ability to access your vault, even under legal compulsion.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h3 className="text-lg font-medium text-white mb-2">No Central Servers</h3>
                            <p className="text-gray-400 text-sm">
                                There is no database to hack. Your data lives only on your device.
                            </p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h3 className="text-lg font-medium text-white mb-2">No User Accounts</h3>
                            <p className="text-gray-400 text-sm">
                                We do not collect emails, phone numbers, or metadata.
                            </p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h3 className="text-lg font-medium text-white mb-2">Client-Side Only</h3>
                            <p className="text-gray-400 text-sm">
                                All logic runs locally. No data is ever sent to a backend API.
                            </p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <h3 className="text-lg font-medium text-white mb-2">Master Password Privacy</h3>
                            <p className="text-gray-400 text-sm">
                                Your master password is never stored or transmitted.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Local-Only Encryption */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-white">3. Local-Only Encryption</h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            Your vault is encrypted at rest using <strong>AES-256</strong> (Advanced Encryption Standard with a 256-bit key).
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-400">
                            <li>
                                <strong>Key Derivation:</strong> Your encryption key is derived directly from your Master Password using a secure key derivation function (KDF).
                            </li>
                            <li>
                                <strong>On-Device Processing:</strong> Encryption and decryption happen solely within your device's memory.
                            </li>
                            <li>
                                <strong>Ephemeral States:</strong> Decrypted data exists in memory only while the app is unlocked. Locking the app clears sensitive data from memory.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 4. Authentication Model */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-white">4. Authentication Model</h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            The <strong>Master Password</strong> acts as the root of trust. Without it, the data is mathematically indistinguishable from random noise.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-white mb-2">Biometric Unlock</h3>
                            <p className="text-gray-400">
                                For convenience, Klypt supports biometric unlock (fingerprint/face).
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                                <li>Biometrics are handled entirely by the Operating System (Android/iOS).</li>
                                <li>The app never accesses raw biometric data.</li>
                                <li>The app only receives a cryptographic token or success/failure signal from the OS secure enclave.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5. Backup & Recovery Model */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-white">5. Backup & Recovery Model</h2>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                        <p className="text-gray-300 leading-relaxed">
                            Because there is no central server, <strong>there is no "Forgot Password" button.</strong>
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-400">
                            <li>
                                <strong>Encrypted Backups:</strong> You can export your vault to a file. This file is encrypted with your Master Password.
                            </li>
                            <li>
                                <strong>User Control:</strong> You decide where to store this backup (e.g., Google Drive, local USB, email).
                            </li>
                            <li>
                                <strong>The Trade-off:</strong> If you lose your device AND have no backup, your data is gone. If you forget your Master Password, your data is permanently inaccessible. This is a deliberate security trade-off to ensure no one but you can access your vault.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 6. Threat Model */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-white">6. Threat Model</h2>
                    <p className="text-gray-300 mb-6">
                        Klypt is designed to protect against remote attackers, server breaches, and mass surveillance.
                        However, no security system covers every possible scenario. Klypt does <strong>NOT</strong> protect against:
                    </p>
                    <ul className="grid gap-4 md:grid-cols-2">
                        <li className="flex items-start p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                            <span className="text-red-400 mr-2">✕</span>
                            <span className="text-gray-400 text-sm">
                                <strong>Compromised Devices:</strong> Malware or keyloggers on your device could intercept your Master Password as you type it.
                            </span>
                        </li>
                        <li className="flex items-start p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                            <span className="text-red-400 mr-2">✕</span>
                            <span className="text-gray-400 text-sm">
                                <strong>Physical Coercion:</strong> If you are forced to unlock your device, the encryption cannot protect the data.
                            </span>
                        </li>
                        <li className="flex items-start p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                            <span className="text-red-400 mr-2">✕</span>
                            <span className="text-gray-400 text-sm">
                                <strong>User Negligence:</strong> Using a weak Master Password (e.g., "123456") or storing backups in public folders.
                            </span>
                        </li>
                        <li className="flex items-start p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                            <span className="text-red-400 mr-2">✕</span>
                            <span className="text-gray-400 text-sm">
                                <strong>Permanent Data Loss:</strong> If you lose your device without a made backup, recovery is impossible.
                            </span>
                        </li>
                    </ul>
                </section>

                {/* 7. Design Philosophy */}
                <section className="pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold mb-6 text-white">7. Design Philosophy</h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                        <p>
                            We prioritize <strong>Security over Convenience</strong>. We believe in transparency over marketing,
                            and user ownership over vendor lock-in.
                        </p>
                        <p>
                            Klypt will never track you, never sell your data, and never compromise on encryption standards
                            for the sake of "easier" access. Your data is yours alone.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
