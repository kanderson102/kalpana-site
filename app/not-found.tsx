import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
            <h1 className="text-9xl font-bold text-sage-900 dark:text-sage-100">404</h1>
            <h2 className="text-2xl font-medium mt-4 text-stone-800 dark:text-stone-200">Page Not Found</h2>
            <p className="text-stone-600 dark:text-stone-400 mt-2 text-center max-w-md">
                The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-8">
                <Link href="/">
                    <Button size="lg">
                        Return Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}
