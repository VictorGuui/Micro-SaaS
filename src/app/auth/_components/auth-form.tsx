'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { useForm } from "react-hook-form"

   
export  function AuthForm() {

    const form = useForm()

    const handleSubmit = form.handleSubmit((data) =>{
        console.log(data)
    })

    return (
    <Card className="w-full max-w-md">
        <CardContent className="flex flex-col gap-4 p-6">
        <div className="space-y-2">
            <div>Sign in to your account</div>
            <div className="text-sm">Enter your email to sign in or create an account</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" required type="email" {... form.register('email')}/>
            </div>
            <Button className="w-full" type="submit">
            Send magic link
            </Button>
        </form>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 gap-2">
            <Link className="text-sm font-medium" href="#">
            Don't have an account? Sign up
            </Link>
        </div>
        </CardContent>
    </Card>
    )
}
   
   
