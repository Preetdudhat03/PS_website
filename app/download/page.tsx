import Link from 'next/link';
import { latestVersion } from '@/lib/version';

export const metadata = {
    title: "Download | Klypt",
    description: "Download the latest version of Klypt for Android.",
};

export default function DownloadPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <div className="max-w-2xl w-full space-y-12">
                <h1 className="text-4xl font-bold tracking-tight text-white">Download Klypt</h1>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-4">
                            Latest Release
                        </span>
                        <h2 className="text-2xl font-bold text-white mb-2">v{latestVersion.version}</h2>
                        <p className="text-gray-400 text-sm">Released on {latestVersion.releaseDate}</p>
                    </div>

                    <a
                        href="/klypt.zip"
                        className="block w-full py-4 bg-white text-black hover:bg-gray-200 rounded-xl text-lg font-bold transition-all shadow-lg active:scale-95 mb-8"
                        download
                    >
                        Download App (ZIP)
                    </a>

                    <div className="text-left bg-black/20 rounded-xl p-6 border border-white/5">
                        <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">What's New</h3>
                        <ul className="space-y-3">
                            {latestVersion.changelog.map((change, index) => (
                                <li key={index} className="flex items-start text-gray-400 text-sm">
                                    <span className="mr-3 text-blue-500 mt-1">•</span>
                                    {change}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-4 max-w-lg mx-auto">
                    <p className="text-yellow-500/80 text-sm bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                        ⚠️ <strong>Note:</strong> You may need to "Allow installation from unknown sources" in your settings since this is a self-hosted release.
                    </p>
                </div>

                <div className="pt-8">
                    <Link href="https://github.com/Preetdudhat03/password_manager_app/releases" className="text-blue-400 hover:text-blue-300 underline underline-offset-4" target="_blank">
                        View Source Code & Releases on GitHub
                    </Link>
                </div>
            </div>
        </div>
    );
}
