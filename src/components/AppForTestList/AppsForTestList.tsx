'use client';
import { App, TestingAppsUsers, User } from '@prisma/client';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { Switch } from '@/components/ui/switch';
import {
  addAppforUserTesting,
  appInstalledByUser,
} from '@/actions/appActions/appActions';
import { AppForTestItem } from './AppForTestItem';

type Props = {
  userId: string;
  // userWithHisApp: User & { userApp: App | null };
  appsForTesting: (App & {
    author: User;
    testingAppsUsers: TestingAppsUsers[];
    authorAsUsersAppTester: TestingAppsUsers;
  })[];
};

export function AppForTestList({ userId, appsForTesting }: Props) {
  return (
    <>
      <h1 className='font-bold'>AppsForTestList:</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>user</TableHead>
            <TableHead>comment</TableHead>
            <TableHead>app name</TableHead>
            <TableHead>app url</TableHead>
            <TableHead>become a tester</TableHead>
            <TableHead>comment</TableHead>
            <TableHead>app installed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appsForTesting.map((app) => (
            <AppForTestItem
              key={app.id}
              app={app}
              userId={userId}
              // userWithHisApp={userWithHisApp}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
