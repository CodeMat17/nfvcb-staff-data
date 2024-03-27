"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";

  const getInitials = (name) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0]).join("");
  };

const StaffDataList = ({ staffList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStaff = staffList.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.fileNo.toString().includes(searchTerm) ||
      staff.location.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className='max-w-xl mx-auto'>
      <div className='flex justify-center '>
        <Input
          type='search'
          onChange={handleSearch}
          placeholder='Search staff with name, file No. or location'
        />
      </div>
      <div className='mt-12'>
        {filteredStaff && filteredStaff.length < 1 ? (
          <div className='flex justify-center pt-12 text-red-600'>
            No data found!
          </div>
        ) : (
          filteredStaff.map((staff) => (
            <div key={staff.id}>
              <Drawer>
                <DrawerTrigger
                  asChild
                  className='flex justify-start gap-3 mb-3'>
                  <Button
                    variant='ghost'
                    className='w-full text-lg tracking-wid'>
                    <Avatar>
                      <AvatarImage
                        src={staff.avatar}
                        alt='@shadcn'
                      />
                      <AvatarFallback>{getInitials(staff.name)}</AvatarFallback>
                    </Avatar>
                    {staff.name}
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className='px-4 mx-auto w-full max-w-md'>
                    <div className='flex items-center justify-cente gap-1'>
                      <Avatar className='w-20 h-20'>
                        <AvatarImage
                          src={staff.avatar}
                          alt='@shadcn'
                        />
                        <AvatarFallback>
                          {getInitials(staff.name)}
                        </AvatarFallback>
                      </Avatar>
                      <DrawerHeader className='text-left'>
                        <DrawerTitle>{staff.name}</DrawerTitle>
                        <DrawerDescription>{staff.location}</DrawerDescription>
                      </DrawerHeader>
                    </div>
                    <div className='mt-3 flex flex-col  gap-2'>
                      <div className='flex items-center justify-between'>
                        <p>File No.:</p>
                        <p>{staff.fileNo}</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p>Grade Level:</p>
                        <p>{staff.gl}</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p>Step:</p>
                        <p>{staff.step}</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p>Rank:</p>
                        <p>{staff.rank}</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p>Last Promotion:</p>
                        <p>{staff.lastP}</p>
                      </div>
                      <div className='flex items-cente justify-between'>
                        <div>
                          <p>Is on leave?:</p>
                          {staff.leave && (
                            <p className='text-sm italic text-gray-500'>
                              March 02, 2024 - April 28, 2024
                            </p>
                          )}
                        </div>
                        <div>
                          {staff.leave ? (
                            <div className='flex flex-col items-end'>
                              <p>Yes</p>
                            </div>
                          ) : (
                            "No"
                          )}
                        </div>
                      </div>
                    </div>

                    <DrawerFooter>
                      {/* <Button>Submit</Button> */}
                      <DrawerClose>
                        <Button variant='outline'>Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StaffDataList;
