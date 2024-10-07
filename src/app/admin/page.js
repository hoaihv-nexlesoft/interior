"use client"
import { Button, Dialog, Flex, Heading, Table, Text, TextField } from '@radix-ui/themes'
import LayoutAdmin from '../../components/layout-admin/Layout'
import './styles.css'
import AddEditProject from './AddEditProject';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'

function safeParse(jsonString) {
   if (typeof jsonString !== 'string') {
       return null;
   }
   try {
       return JSON.parse(jsonString);
   } catch (error) {
       return null;
   }
 }

export default function Admin() {
   const token = Cookies.get('token');
   const user = Cookies.get('user_data');
   const decoded = safeParse(token) && jwtDecode(JSON.parse?.(token));
   console.log(user, token, decoded, Number(user) === decoded?.userId)

   return (
      <LayoutAdmin>
         <div className='admin-page'>
         <Heading mb="2">The quick brown fox jumps over the lazy dog</Heading>
         <Table.Root variant="surface">
            <Table.Header>
               <Table.Row>
                  <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
               </Table.Row>
            </Table.Header>

            <Table.Body>
               <Table.Row>
                  <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                  <Table.Cell>danilo@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                  <Table.Cell><AddEditProject /></Table.Cell>
               </Table.Row>

               <Table.Row>
                  <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                  <Table.Cell>zahra@example.com</Table.Cell>
                  <Table.Cell>Admin</Table.Cell>
                  <Table.Cell><AddEditProject /></Table.Cell>
               </Table.Row>

               <Table.Row>
                  <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                  <Table.Cell>jasper@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                  <Table.Cell><AddEditProject /></Table.Cell>
               </Table.Row>
               <Table.Row>
               <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                  <Table.Cell>jasper@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                  <Table.Cell><AddEditProject /></Table.Cell>
               </Table.Row>
            </Table.Body>
         </Table.Root>
         <div className='paginate'>
         <ResponsivePagination
      current={1}
      total={20}
      onPageChange={() => ''}
    />
         </div>
         
         </div>
      </LayoutAdmin>
   )
}
