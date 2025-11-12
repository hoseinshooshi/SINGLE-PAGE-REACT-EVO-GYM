import Logo from "@/assets/Logo.png"
type Props = {}

const Footer = ({}: Props) => {
  return (
    <footer className="bg-cyan-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="" />
                <p>ALL RIGHTS RESERVED</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold font-mono">LINKS</h4>
                <p className="my-5">LINKS1</p>
                <p className="my-5">LINKS2</p>
                <p className="my-5">LINKS3</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold font-mono">SOCIALS</h4>
                <p className="my-5">INSTAGRAM</p>
                <p className="my-5">LINKDIN</p>
                <p className="my-5">TWITTER</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer