import { Outlet } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

export function AppLayout() {
	return (
		<main className="bg-yellow-800 p-5 space-y-4">
			 <Header />

			 <Outlet />

			 <Footer />
		</main>
	)
}