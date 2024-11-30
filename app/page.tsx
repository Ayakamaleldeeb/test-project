import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";


export default function Home() {
  return (
  <>

  <NavigationMenu className="bg-stone-100 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-center">
    <NavigationMenuList className="flex justify-center space-x-20">
      <NavigationMenuItem>
        <Link href="#" >
          <NavigationMenuLink>
            <Button className="bg-transparent hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded">Home</Button>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#" >
          <NavigationMenuLink>
            <Button className="bg-transparent hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded">Products</Button>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/login">
          <NavigationMenuLink>
            <Button className="bg-transparent hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded">Login</Button>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>








  </>
  );
}
