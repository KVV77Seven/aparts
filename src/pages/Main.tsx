import Container from '../components/Container';

const Main = () => {
  return (
    <main>
      <header className="pt-[40px] relative w-[100vw] h-[1000px] bg-[url('./images/header-bg.jpg')] bg-cover bg-no-repeat">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-"></div>
        <Container className="flex justify-between">
          <div className="flex justify-between w-[20%]"></div>
          <div className="flex items-center">
            <div className="w-[100px] h-[100px] bg-[url('./images/logo.png')] bg-cover bg-no-repeat"></div>
            <h1 className="ml-2 text-white font-montserrat text-4xl font-semibold">
              Digital Kazakhstan
            </h1>
          </div>
          <div className="flex justify-between items-center w-[20%] z-20">
            <button
              type="button"
              className="w-[48%] h-[50%] border-2 border-gra rounded-md"
            ></button>
            <button
              type="button"
              className="w-[48%] h-[50%] border-2 border-red-100 rounded-md"
            ></button>
          </div>
        </Container>
      </header>
    </main>
  );
};
export default Main;
