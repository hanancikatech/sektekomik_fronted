import { useRouter } from "next/dist/client/router"
import { Button } from "../../components"

interface Menu {
  name: string,
  path: string
}

export const Navbar = () => {
  const router = useRouter()
  const menu: Menu[] = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Manhua",
      path: "/manhua"
    },
    {
      name: "Manhwa",
      path: "/manhwa"
    },
    {
      name: "Donasi",
      path: "/donasi"
    }
  ]
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">
          Sektekomik
        </span>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch">
          {menu.map((item, index) => (
            <Button key={index} variant='ghost' onClick={() => router.push(item.path)} > {item.name} </Button>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        <Button variant='ghost'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}
