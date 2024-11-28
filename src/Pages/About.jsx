import CountUp from "react-countup"
import team from "../assets/team.webp"

const About = () => {
    return (
        <div>
            <div className="mx-4 lg:mx-36 my-4">
                <div className="space-y-3">
                    <h1 className="text-4xl text-center font-bold">Who We Are and What We Do?</h1>
                    <p className="text-center">We are a passionate and innovative team dedicated to bringing you the best in technology and customer service. With years of experience in the industry, we strive to create solutions that make a real impact on people&apos;s lives. Our team is made up of individuals who believe in pushing boundaries and challenging the status quo to create something extraordinary.
                        At Cyber, we specialize in offering top-quality products and services designed to meet the ever-evolving needs of our customers. From cutting-edge gadgets and electronics to personalized support, we focus on delivering outstanding value and satisfaction. Our mission is to empower individuals with the tools they need to enhance their everyday lives, whether at work, home, or play. We are committed to making technology accessible, efficient, and enjoyable for everyone.
                    </p>
                </div>
            </div>
            <div>
                <img src={team} alt="" />
            </div>

            <div className="mx-4 lg:mx-36 my-4 bg-gray-100 p-2 lg:p-5 rounded-sm shadow-md">
                <h3 className="text-4xl text-center font-bold my-3">Cyber By Numbers</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 my-5 gap-y-5">
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-6xl font-black"><CountUp end={2024}></CountUp></p>
                        <p>Year Founded</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-6xl font-black"><CountUp end={10527}></CountUp></p>
                        <p>Merchants</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-6xl font-black"><CountUp end={2020}></CountUp>    IPO</p>
                        <p>NASDAQ: BIGC</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-6xl font-black"><CountUp end={150}></CountUp>+</p>
                        <p>Countries Served</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-6xl font-black"><CountUp end={2800}></CountUp></p>
                        <p>Agency and Technology Partners</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-6xl font-black"><CountUp end={10000}></CountUp>+</p>
                        <p>Full Time Employees</p>
                    </div>
                </div>

                <p className="text-center">We&apos;re dedicated to our merchants, guided by our values and powered by our people. This is the driving force behind our success. It&apos;s what has taken us from a 2-person startup to a global team of hundreds helping retailers make billions of dollars in sales. </p>
            </div>

            <div>
                <h3 className="text-4xl text-center font-bold my-3">Our Location</h3>

                <div className="m-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.168052105155!2d90.36434790426631!3d23.812622456666617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c86768be8bdf%3A0xae537a0beb4af63c!2sOrange%20Solutions%20Ltd!5e0!3m2!1sen!2sbd!4v1732623585013!5m2!1sen!2sbd" width="100%" height={400} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-md border-2 border-gray-3    00 shadow-md"></iframe>
                </div>
            </div>

        </div>
    )
}

export default About