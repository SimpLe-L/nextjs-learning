/*
 * @Description:  layout
 * @Author: liaolei
 * @Date: 2024-05-08 13:51:12
 * @LastEditors: liaolei
 * @LastEditTime: 2024-05-08 13:51:18
 */
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}