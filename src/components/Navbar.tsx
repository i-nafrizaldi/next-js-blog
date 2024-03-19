"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <h1 className=" cursor-pointer text-2xl font-bold" onClick={()=>window.location.href='/'}>GOBLOGS</h1>
          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8">
              <h3 onClick={()=>window.location.href='/'}>Home</h3>
              <h3>Profile</h3>
            </div>
          </div>
          <div className="block md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={()=>window.location.href='/'} >Home</DropdownMenuItem>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
