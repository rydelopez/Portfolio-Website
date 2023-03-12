import { Fragment, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [showSend, setShowSend] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_c1qahqj",
				"template_7cbbmhj",
				{
					from_name: form.name,
					to_name: "Ryan",
					from_email: form.email,
					to_email: "delopezryan@gmail.com",
					message: form.message,
				},
				"IcAj6PApi1tIcRBQY"
			)
			.then(
				() => {
					setLoading(false);
					setShowSend(true);
					setForm({ name: "", email: "", message: "" });
				},
				(error) => {
					setLoading(false);
					alert("An error occurred. Please try again later.");
					console.log(error);
				}
			);
	};

	return (
		<>
			<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
				>
					<p className={styles.sectionSubText}>Get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact.</h3>
					<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
						New projects, opportunities, or just want to say hi? My inbox is
						always open. Feel free to also reach out to me on{" "}
						<a
							href="https://www.linkedin.com/in/vrdelopez/"
							target="_blank"
							rel="noreferrer"
							className="text-secondary underline"
						>
							LinkedIn
						</a>
						.
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8"
					>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Email</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="What's your email?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">Your Message</span>
							<textarea
								rows="7"
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="What do you want to say?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<button
							type="submit"
							className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</motion.div>
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
				>
					<EarthCanvas />
				</motion.div>
			</div>
			<div
				aria-live="assertive"
				className="pointer-events-none fixed inset-x-0 bottom-0 top-30 flex items-end px-4 py-6 z-30 sm:items-start sm:p-6"
			>
				<div className="flex w-full flex-col items-center space-y-4 sm:items-end">
					<Transition
						show={showSend}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-primary shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<CheckCircleIcon
											className="h-6 w-6 text-green-400"
											aria-hidden="true"
										/>
									</div>
									<div className="ml-3 w-0 flex-1 pt-0.5">
										<p className="text-sm font-medium text-white">
											Message sent successfully!
										</p>
										<p className="mt-1 text-sm text-secondary">
											I will get back to you as soon as possible.
										</p>
									</div>
									<div className="ml-4 flex flex-shrink-0">
										<button
											type="button"
											className="inline-flex rounded-md text-secondary hover:text-gray-500 focus:outline-none"
											onClick={() => {
												setShowSend(false);
											}}
										>
											<span className="sr-only">Close</span>
											<XMarkIcon className="h-5 w-5" aria-hidden="true" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</>
	);
};

export default SectionWrapper(Contact, "contact");
