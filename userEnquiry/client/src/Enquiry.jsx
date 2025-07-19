import React from 'react';
import { Button, Checkbox, Label, Textarea, TextInput } from 'flowbite-react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Enquiry() {
    let saveEnquiry=(e)=>{
        alert("Enquiry Saved Successfully");
        e.preventDefault()
    }
  return (
    <div>
      <h1 className="text-[40px]  text-center py-6">User Enquiry</h1>

      <div className="grid grid-cols-[30%_70%] min-h-screen">
        {/* Left Form Area */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md m-4">
          <h2 className="text-[24px] font-bold mb-4">Enquiry Form</h2>

          <form className="flex flex-col gap-4" onSubmit={saveEnquiry}>
            <div>
              <Label htmlFor="name" className="mb-1 block "><div className='text-black'>Your Name</div></Label>
              <TextInput id="name" type="text" placeholder="Enter your name" required />
            </div>

            <div>
              <Label htmlFor="email" className="mb-1 block"><div className='text-black'>Your Email</div></Label>
              <TextInput id="email" type="email" placeholder="Enter your email" required />
            </div>

            <div>
              <Label htmlFor="password" className="mb-1 block"><div className='text-black'>Your Password</div></Label>
              <TextInput  id="password" type="password" required />
            </div>

            <div>
              <Label htmlFor="message" className="mb-1 block"><div className='text-black'>Your Message</div></Label>
              <Textarea id="message" placeholder="Leave a comment..." rows={4} required />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember"><div className='text-black'>Remember me</div></Label>
            </div>

            <Button type="submit" color="blue">
  Submit
</Button>

          </form>
        </div>

        <div className="overflow-x-auto">
            <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>Color</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

        </div>
      </div>
    </div>
  );
}
