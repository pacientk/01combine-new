import { Navbar } from '@/components';

interface IProps {
   children: JSX.Element;
}

const LayoutMain: React.FC<IProps> = ({ children }) => {
   return (
      <div className={'cc-01combine-app'}>
         <Navbar />
         <main>{children}</main>
      </div>
   );
};

export default LayoutMain;
