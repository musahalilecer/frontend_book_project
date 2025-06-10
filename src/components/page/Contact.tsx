import Image from "../atomic/Image";
import Label from '../atomic/Label';
import Input from '../atomic/Input';
import Button from '../atomic/Button';

const Contact = () => {

  const handleClick = () => {

  }

  const onSubmit = () => {

  }

  return (
    <section className="bg-gradient-to-br from-white via-gray-100 to-gray-200 flex justify-center items-center min-h-screen px-4">
      <div className="flex flex-col w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden bg-white">
        <div className="text-center py-8 border-b border-gray-200">
          <h2 className="font-extrabold text-4xl tracking-wide text-gray-800">Contact Us</h2>
          <p className="text-gray-500 mt-2">We’d love to hear from you!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 p-10">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-2xl shadow-lg object-cover w-full h-80 max-h-96 "
              image="https://w0.peakpx.com/wallpaper/975/852/HD-wallpaper-books-reading-books-background-with-books-bookshelf-thumbnail.jpg"
              alt="Contact Visual"
            />
          </div>
          <div className="w-full">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label text="Username" className="text-lg font-semibold text-gray-700" />
                <Input placeHolder="Enter your username" className="mt-2 w-full border-gray-300 hover:transition duration-200 ease-in-out hover:scale-105 hover:border-b-gray-800" />
              </div>
              <div>
                <Label text="E-mail" className="text-lg font-semibold text-gray-700" />
                <Input placeHolder="Enter your email" type="email" className="mt-2 w-full border-gray-300 hover:transition duration-200 ease-in-out hover:scale-105 hover:border-b-gray-800" />
              </div>
              <div>
                <Label text="Message" className="text-lg font-semibold text-gray-700" />
                <Input placeHolder="Enter your message" type="text" className="mt-2 w-full border-gray-300 h-24 hover:transition duration-200 ease-in-out hover:scale-105 hover:border-b-gray-800" />
              </div>
              <div className="pt-4">
                <Button
                  children="Submit"
                  onClick={handleClick}
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-00 text-white py-3 rounded-lg transition-all shadow-md hover:transition duration-300 ease-in-out cursor-pointer hover:bg-indigo-900 hover:scale-110"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact