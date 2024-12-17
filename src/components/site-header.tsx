import Link from "next/link"
import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md" >
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/Logo.png" alt="" height={93} width={63}/>
                    </Link>
                    <br />
                    <div className="hidden lg:flex items-center space-x-1 relative">
                        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-10 w-64 bg-muted"
                        />
                    </div>
                </div>
                <nav className="flex items-center gap-4 lg:gap-6 absolute right-3" >
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/blog"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/store"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        Store
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        Contact Us
                    </Link>
                    <Button variant="default" className="bg-zinc-900 text-white hover:bg-zinc-800">
                        Download Now
                    </Button>
                </nav>
            </div>
        </header>
    )
}

