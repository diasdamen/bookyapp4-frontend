import {
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuShortcut, 
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

import Link from 'next/link';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import { FaCalendarCheck, FaHome, FaSignOutAlt } from 'react-icons/fa';

const Dropdown = ({ user } : { user: any }) => {
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center gap-2 cursor-pointer'>
          {/* avatar */}
          <Avatar>
            <AvatarImage src={user.picture} />
            <AvatarFallback className='bg-accent text-white'>
              {`${user.given_name[0]} ${user.family_name[0]}`}
            </AvatarFallback>
          </Avatar>
          {/* name & email */}
          <div>
            <div className='flex gap-1 font-bold'>
              <p>{user.given_name}</p>
              <p>{user.family_name}</p>
            </div>
            <p className='text-sm font-semibold'>{user.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className='w-72 mt-4 p-4 flex flex-col gap-2' 
        align='start'
      >
        <DropdownMenuLabel className='text-base'>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className='flex flex-col gap-2'>
          <Link href="/">
            <DropdownMenuItem>
              Homepage
              <DropdownMenuShortcut className='text-lg text-accent'>
                <FaHome />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard">
            <DropdownMenuItem>
              My Bookings
              <DropdownMenuShortcut className='text-lg text-accent'>
                <FaCalendarCheck />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogoutLink>
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut className='text-lg text-accent'>
              <FaSignOutAlt />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;