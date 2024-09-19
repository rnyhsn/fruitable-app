
import NavItem from "./NavItem"

export interface LinkItem {
    title: string,
    path: string,
    subPages?: {
        title: string,
        path: string
    }[]
}
const navList: LinkItem[] = [
    {title: "Home", path: "/"},
    {title: "Shop", path: "/shop"},
    {title: "About Us", path: "/about"},
    
    {title: "Contact", path: "/contact"}
]

const NavList = () => {
  return (
    <div className="flex gap-6 text-gray-700 font-semibold">
    {
        navList.map((nav: LinkItem) => (
            <NavItem nav={nav} key={nav.title} />
        ))
    }
    </div>
  )
}

export default NavList
