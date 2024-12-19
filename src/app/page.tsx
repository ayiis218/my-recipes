'use server'

import { ROUTES } from "@/registry/route.register"
import { redirect } from "next/navigation"

export default async function App() {
	redirect(ROUTES.homepage)
}
