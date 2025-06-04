'use client' // Essential for using client-side components

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, // Make sure this is imported if it's a separate component
} from "@/components/ui/sidebar";
import { 
  Book, 
  LayoutDashboard, 
  Compass, 
  PencilRuler, 
  WalletCards, 
  UserCircle2 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const sidebarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/workspace"
  },
  {
    title: "My Learning",
    icon: Book,
    path: '/workspace/my-learning'
  },
  {
    title: "Explore Courses",
    icon: Compass,
    path: '/workspace/explore-courses'
  },
  {
    title: "AI Tools",
    icon: PencilRuler,
    path: '/workspace/ai-tools'
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: '/workspace/billing'
  },
  {
    title: "Profile",
    icon: UserCircle2,
    path: '/workspace/profile'
  },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center gap-2 mt-3">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={30}
            height={30}
            className="inline-block align-middle"
          />
          <span className="text-2xl font-bold inline-block align-middle">
            Zenius
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className='mt-10'>
        <SidebarGroup>
          <Button>Create New Course</Button>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarOptions.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild className={'p-5'}>
                    <Link href={item.path} className="text-[17px]">
                      <item.icon className="h-8 w-8"/>
                      <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;