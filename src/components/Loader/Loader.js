import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      height={80}
      width={80}
      color="#0B44CD"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#0B44CD"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
