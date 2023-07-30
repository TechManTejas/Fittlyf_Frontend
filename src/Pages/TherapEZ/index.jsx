import RealTimeTracking from "../../Images/real_time_tracking.webp"
import AutomatedReminders from "../../Images/automated_reminders.webp"
import InstantUpdatesForHealthcareProviders from "../../Images/instant_updates_for_healthcare_providers.webp"
import MedicalCost from "../../Images/medical_cost.webp"
import SatisfiedPatient from "../../Images/satisfied_patient.webp"

export default function TherapEZ() {

    return (
        <>
            <section className="px-5">
                <div className="">
                    <nav className="py-8 max-w-7xl mx-auto flex flex-col sm:flex-row w-full justify-between">
                        <div className="flex gap-2 items-center">
                            <div className="mb-2 w-fit relative">
                                <img
                                    src="https://res.cloudinary.com/dgnhkb9bo/image/upload/fbtvodjzkhzdjbpxnl74y98knfw7.png"
                                    alt="logo-upload"
                                    className="h-12 mx-auto object-contain"
                                />
                            </div>
                            <a href="" className="font-semibold text-2xl">
                                TherapEZ
                            </a>
                        </div>
                        <div className="flex text-base font-medium gap-8">
                            <a href="#features" className="hover:opacity-80">
                                Features
                            </a>
                            <a href="#faq" className="hover:opacity-80">
                                FAQ
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="flex gap-20 flex-col-reverse lg:flex-row max-w-7xl py-12 sm:pt-16 mx-auto">
                    <div className="flex-1">
                        <div className="">
                            <h1 className="text-4xl md:text-7xl  md:leading-none max-w-5xl font-bold md:leading-none">
                                Patient's Recovery, Simplified.
                            </h1>
                        </div>
                        <div>
                            <p className="sm:leading-relaxed max-w-3xl text-2xl mt-4">
                                Increased patient prescribed home-activity adherence Quicker patient
                                recovery Increased patient satisfaction
                            </p>
                        </div>
                        <div className="max-w-lg mt-12 text-left">
                            <section className="relative">
                                <h2 className="mb-3 text-2xl sm:text-2xl font-custom font-bold max-w-4xl md:leading-tight">
                                    Increase your patients care
                                </h2>
                                <div className="">
                                    <form
                                        className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap"
                                        action="/subscribe"
                                        acceptCharset="UTF-8"
                                        method="post"
                                    >
                                        <input
                                            type="hidden"
                                            name="authenticity_token"
                                            defaultValue="mmSzJTemHj2iRHQ7DnjNDoJ8otjjYSNLrQSsrgUtgJjk3y_vywfbZdRE1C0Q4AUtBK4l3pZsKGfbPBc1h4CPBg"
                                            autoComplete="off"
                                        />
                                        <input
                                            type="hidden"
                                            name="iframe_id"
                                            id="iframe_id"
                                            defaultValue="txz6kwir"
                                            autoComplete="off"
                                        />
                                        <label className="sr-only" htmlFor="email">
                                            Email address
                                        </label>
                                        <input
                                            autoComplete="email"
                                            required="required"
                                            className="flex-auto rounded-lg border-0 bg-white px-6 py-3.5 shadow-sm ring-1 ring-black/10 focus:ring-2 w-full focus:ring-black/10 text-slate-900 text-base sm:text-xl sm:leading-6"
                                            placeholder="Phone no. "
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                        <input
                                            type="submit"
                                            name="commit"
                                            defaultValue="Book a Demo"
                                            className="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white"
                                            style={{ backgroundColor: "#692cf3" }}
                                            data-disable-with="Book a Demo"
                                        />
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="flex-1 relative sm:self-start shrink-0 flex justify-end">
                        <div className="w-full">
                            <div className="max-w-7xl mx-auto">
                                <div
                                    id="media-container"
                                    className="relative w-full h-0"
                                    style={{ paddingBottom: "56.25%" }}
                                >
                                    <iframe
                                        src={"https://www.youtube.com/embed/JSZeD_1Dkpg"}
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                        allowFullScreen={true}
                                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                                        loading="lazy"
                                        title="YouTube Video"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="features" className="px-5 relative py-20 sm:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-6xl max-w-2xl mx-auto font-custom font-bold md:leading-tight">
                            Key Features
                        </h2>
                        <p className="sm:leading-relaxed text-2xl max-w-2xl mx-auto">
                            How TherapEZ Helps You and Your Patients
                        </p>
                    </div>
                    <div className="flex flex-col gap-28 mb-28">
                        <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
                            <div className="flex relative justify-center order-first">
                                <div className="group">
                                    <div className="flex justify-between absolute w-full top-1 px-1">
                                        <div className="inline-flex opacity-0 group-hover:opacity-100 group-hover:origin-left group-hover:scale-100 scale-0 transition gap-3 items-center pl-3 pr-1 py-1 bg-black/60 text-base ring-1 ring-slate-300/10 backdrop-blur-lg rounded-lg text-white">
                                            <span className="text-sm">Change</span>
                                            <div className="flex gap-1">
                                                <a
                                                    className="bg-teal-50 text-teal-600 hover:text-teal-700 hover:bg-teal-100 p-1.5 rounded-md transition"
                                                    href="/features/284031/update_image"
                                                >
                                                    <span className="sr-only">Image from Unsplash</span>
                                                    <svg
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15 3H9V8H15V3ZM8 11H3V21H8H16H21V11H16V16H8V11Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                className="bg-black/50 opacity-0 group-hover:opacity-100 group-hover:origin-right group-hover:scale-100 scale-0 transition  inline-flex items-center justify-center text-white backdrop-blur-lg p-1.5 hover:bg-rose-500 rounded-md"
                                                rel="nofollow"
                                                data-method="delete"
                                                href="/features/284031/destroy_image_unsplash"
                                            >
                                                <span className="sr-only">Delete Image</span>
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={RealTimeTracking}
                                        alt="Real-time Movement Tracking"
                                        className="w-full max-w-2xl object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                                    Real-time Movement Tracking
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                                    TherapEZ tracks patient movements in real-time, ensuring they
                                    perform exercises daily and correctly.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
                            <div className="flex relative justify-center lg:order-last">
                                <div className="group">
                                    <div className="flex justify-between absolute w-full top-1 px-1">
                                        <div className="inline-flex opacity-0 group-hover:opacity-100 group-hover:origin-left group-hover:scale-100 scale-0 transition gap-3 items-center pl-3 pr-1 py-1 bg-black/60 text-base ring-1 ring-slate-300/10 backdrop-blur-lg rounded-lg text-white">
                                            <span className="text-sm">Change</span>
                                            <div className="flex gap-1">
                                                <a
                                                    className="bg-teal-50 text-teal-600 hover:text-teal-700 hover:bg-teal-100 p-1.5 rounded-md transition"
                                                    href="/features/284032/update_image"
                                                >
                                                    <span className="sr-only">Image from Unsplash</span>
                                                    <svg
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15 3H9V8H15V3ZM8 11H3V21H8H16H21V11H16V16H8V11Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                className="bg-black/50 opacity-0 group-hover:opacity-100 group-hover:origin-right group-hover:scale-100 scale-0 transition  inline-flex items-center justify-center text-white backdrop-blur-lg p-1.5 hover:bg-rose-500 rounded-md"
                                                rel="nofollow"
                                                data-method="delete"
                                                href="/features/284032/destroy_image_unsplash"
                                            >
                                                <span className="sr-only">Delete Image</span>
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={AutomatedReminders}
                                        alt="Automated Patient Reminders"
                                        className="w-full max-w-2xl object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                                    Automated Patient Reminders
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                                    Sends automated reminders to patients when prescribed home activity is missed to keep them on track.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
                            <div className="flex relative justify-center order-first">
                                <div className="group">
                                    <div className="flex justify-between absolute w-full top-1 px-1">
                                        <div className="inline-flex opacity-0 group-hover:opacity-100 group-hover:origin-left group-hover:scale-100 scale-0 transition gap-3 items-center pl-3 pr-1 py-1 bg-black/60 text-base ring-1 ring-slate-300/10 backdrop-blur-lg rounded-lg text-white">
                                            <span className="text-sm">Change</span>
                                            <div className="flex gap-1">
                                                <a
                                                    className="bg-teal-50 text-teal-600 hover:text-teal-700 hover:bg-teal-100 p-1.5 rounded-md transition"
                                                    href="/features/284033/update_image"
                                                >
                                                    <span className="sr-only">Image from Unsplash</span>
                                                    <svg
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15 3H9V8H15V3ZM8 11H3V21H8H16H21V11H16V16H8V11Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                className="bg-black/50 opacity-0 group-hover:opacity-100 group-hover:origin-right group-hover:scale-100 scale-0 transition  inline-flex items-center justify-center text-white backdrop-blur-lg p-1.5 hover:bg-rose-500 rounded-md"
                                                rel="nofollow"
                                                data-method="delete"
                                                href="/features/284033/destroy_image_unsplash"
                                            >
                                                <span className="sr-only">Delete Image</span>
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={InstantUpdatesForHealthcareProviders}
                                        alt="Instant Updates for Healthcare Providers"
                                        className="w-full max-w-2xl object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                                    Instant Updates for Healthcare Providers
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                                    Stay updated on your patients' daily movements and progress,
                                    allowing you to take timely action if needed.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
                            <div className="flex relative justify-center lg:order-last">
                                <div className="group">
                                    <div className="flex justify-between absolute w-full top-1 px-1">
                                        <div className="inline-flex opacity-0 group-hover:opacity-100 group-hover:origin-left group-hover:scale-100 scale-0 transition gap-3 items-center pl-3 pr-1 py-1 bg-black/60 text-base ring-1 ring-slate-300/10 backdrop-blur-lg rounded-lg text-white">
                                            <span className="text-sm">Change</span>
                                            <div className="flex gap-1">
                                                <a
                                                    className="bg-teal-50 text-teal-600 hover:text-teal-700 hover:bg-teal-100 p-1.5 rounded-md transition"
                                                    href="/features/284034/update_image"
                                                >
                                                    <span className="sr-only">Image from Unsplash</span>
                                                    <svg
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15 3H9V8H15V3ZM8 11H3V21H8H16H21V11H16V16H8V11Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                className="bg-black/50 opacity-0 group-hover:opacity-100 group-hover:origin-right group-hover:scale-100 scale-0 transition  inline-flex items-center justify-center text-white backdrop-blur-lg p-1.5 hover:bg-rose-500 rounded-md"
                                                rel="nofollow"
                                                data-method="delete"
                                                href="/features/284034/destroy_image_unsplash"
                                            >
                                                <span className="sr-only">Delete Image</span>
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={MedicalCost}
                                        alt="Cost-effective Treatment"
                                        className="w-full max-w-2xl object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                                    Cost-effective Treatment
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                                    Reduce frequent visits and overall treatment costs for patients by
                                    ensuring they follow prescribed activities at home.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
                            <div className="flex relative justify-center order-first">
                                <div className="group">
                                    <div className="flex justify-between absolute w-full top-1 px-1">
                                        <div className="inline-flex opacity-0 group-hover:opacity-100 group-hover:origin-left group-hover:scale-100 scale-0 transition gap-3 items-center pl-3 pr-1 py-1 bg-black/60 text-base ring-1 ring-slate-300/10 backdrop-blur-lg rounded-lg text-white">
                                            <span className="text-sm">Change</span>
                                            <div className="flex gap-1">
                                                <a
                                                    className="bg-teal-50 text-teal-600 hover:text-teal-700 hover:bg-teal-100 p-1.5 rounded-md transition"
                                                    href="/features/284035/update_image"
                                                >
                                                    <span className="sr-only">Image from Unsplash</span>
                                                    <svg
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15 3H9V8H15V3ZM8 11H3V21H8H16H21V11H16V16H8V11Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                className="bg-black/50 opacity-0 group-hover:opacity-100 group-hover:origin-right group-hover:scale-100 scale-0 transition  inline-flex items-center justify-center text-white backdrop-blur-lg p-1.5 hover:bg-rose-500 rounded-md"
                                                rel="nofollow"
                                                data-method="delete"
                                                href="/features/284035/destroy_image_unsplash"
                                            >
                                                <span className="sr-only">Delete Image</span>
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={SatisfiedPatient}
                                        alt="Increased Patient Satisfaction"
                                        className="w-full max-w-2xl object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                                    Increased Patient Satisfaction
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                                    Improve patient satisfaction ratings by providing them with a tool
                                    that helps them recover faster and better.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl text-center lg:text-left items-center flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-20">
                            <div className="flex relative justify-center lg:order-last">
                                <div className="group">
                                    <div className="flex justify-between absolute w-full top-1 px-1">
                                        <div className="inline-flex opacity-0 group-hover:opacity-100 group-hover:origin-left group-hover:scale-100 scale-0 transition gap-3 items-center pl-3 pr-1 py-1 bg-black/60 text-base ring-1 ring-slate-300/10 backdrop-blur-lg rounded-lg text-white">
                                            <span className="text-sm">Change</span>
                                            <div className="flex gap-1">
                                                <a
                                                    className="bg-teal-50 text-teal-600 hover:text-teal-700 hover:bg-teal-100 p-1.5 rounded-md transition"
                                                    href="/features/284036/update_image"
                                                >
                                                    <span className="sr-only">Image from Unsplash</span>
                                                    <svg
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M15 3H9V8H15V3ZM8 11H3V21H8H16H21V11H16V16H8V11Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <a
                                                className="bg-black/50 opacity-0 group-hover:opacity-100 group-hover:origin-right group-hover:scale-100 scale-0 transition  inline-flex items-center justify-center text-white backdrop-blur-lg p-1.5 hover:bg-rose-500 rounded-md"
                                                rel="nofollow"
                                                data-method="delete"
                                                href="/features/284036/destroy_image_unsplash"
                                            >
                                                <span className="sr-only">Delete Image</span>
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>{" "}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://images.unsplash.com/photo-1605725961202-18c2678ea41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzE2NTB8MHwxfHNlYXJjaHw2fHxCb29zdCUyMENsaW5pYyUyN3MlMjBSZXB1dGF0aW9ufGVufDB8fHx8MTY5MDM5MjM0N3ww&ixlib=rb-4.0.3&q=80&w=1080&utm_source=60sec.site&utm_medium=referral&utm_campaign=api-credit"
                                        alt="Boost Clinic's Reputation"
                                        className="w-full max-w-2xl object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl sm:mb-4 font-semibold">
                                    Boost Clinic's Reputation
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-4 opacity-70 max-w-2xl">
                                    By using TherapEZ, increase the number of new patients by 50% per
                                    month and maintain trust and loyalty among existing patients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2  lg:grid-cols-2  gap-12 sm:gap-16 mb-20"></div>
                </div>
            </section>
            <div className="stripes bg-slate-50 py-10 sm:mb-24">
                <p className="opacity-50 text-center">This is shown only in edit mode</p>
                {/* <img
                    srcSet="/assets/pricing@2x-cdf97e04671c3e5eafb4aaffb6cdbf5486fec1c2a2d9a7865cf9e871c5c95b36.png 2x"
                    alt="Pricing"
                    className="mx-auto mb-4 mt-8"
                    src="/assets/pricing-855a77ab0ccb86faa7260548fea140dcb743c57b597ec3d218f7e0af0fb763fb.png"
                /> */}
                <p className="text-3xl text-center my-4 font-semibold opacity-90">
                    Pricing Section
                </p>
                <p className="max-w-4xl mx-auto opacity-70 leading-relaxed text-center">
                    Looking to sell digital goods without the hassle? With just a few clicks,
                    you can add up to 3 slots and convert your landing page into a store. Set a
                    price, describe your products in detail, and include a checkout link to
                    popular digital stores like LemonSqueezy, Gumroad, Stripe, and more.
                </p>
                <div
                    className="text-center bg-amber-100 hover:bg-amber-50 hover:ring-amber-100 text-amber-700 cursor-pointer rounded-lg shadow shadow-slate-600/5 ring-1 ring-amber-200 px-6 py-2.5 w-fit mx-auto mt-8"
                >
                    Add pricing section
                </div>
            </div>
            <div>
                <section id="faq" className="pb-8 px-5 py-20 sm:py-32">
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
                        <div>
                            <h2 className="text-3xl sticky top-6 sm:text-5xl md:leading-tight sm:mb-4 font-bold">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="lg:col-span-2 flex flex-col gap-8 mx-auto">
                            <div className="bg-slate-50 rounded-xl p-6 sm:p-10">
                                <h3 className="text-2xl sm:text-3xl sm:mb-2 font-semibold">
                                    How does TherapEZ track patients?
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
                                    TherapEZ utilizes state-of-the-art Visual technology to seamlessly monitor and analyze patient movements in real-time while they do prescribed activities at home.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 sm:p-10">
                                <h3 className="text-2xl sm:text-3xl sm:mb-2 font-semibold">
                                    Can I customize the prescribed activities for each patient?
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
                                    Yes, TherapEZ allows healthcare providers to customize and tailor
                                    the prescribed activities based on each patient's specific needs.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 sm:p-10">
                                <h3 className="text-2xl sm:text-3xl sm:mb-2 font-semibold">
                                    What happens if a patient doesn't perform the prescribed activity?
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
                                    TherapEZ sends automated reminders to the patient and updates the
                                    healthcare provider, enabling timely intervention to ensure
                                    adherence.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 sm:p-10">
                                <h3 className="text-2xl sm:text-3xl sm:mb-2 font-semibold">
                                    Is TherapEZ suitable for all types of clinics?
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
                                    Yes, TherapEZ is designed to benefit clinics of all sizes and
                                    specialties, helping improve patient recovery and treatment
                                    outcomes.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 sm:p-10">
                                <h3 className="text-2xl sm:text-3xl sm:mb-2 font-semibold">
                                    How can TherapEZ reduce treatment costs for patients?
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
                                    By ensuring patients perform exercises correctly at home, TherapEZ
                                    reduces the need for frequent clinic visits, resulting in cost
                                    savings for patients.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 sm:p-10">
                                <h3 className="text-2xl sm:text-3xl sm:mb-2 font-semibold">
                                    Is TherapEZ easy to use for both healthcare providers and patients?
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
                                    Absolutely! TherapEZ is user-friendly and intuitive, making it easy
                                    for both healthcare providers and patients to navigate and utilize
                                    its features.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 sm:p-10">
                                <h3 className="text-2xl sm:text-3xl sm:mb-2 font-semibold">
                                    TherapEZ employs cutting-edge technology to monitor and record the
                                    movements of patients. Through a sophisticated tracking system,
                                    TherapEZ ensures accurate and real-time data on patient activity and
                                    mobility. This data is crucial for healthcare professionals to
                                    assess patient progress, identify patterns, and make informed
                                    decisions about their care.
                                </h3>
                                <p className="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
                                    TherapEZ utilizes state-of-the-art technology to seamlessly monitor
                                    and analyze patient movements in real-time. This is achieved through
                                    the integration of wearable devices and smartphone sensors,
                                    delivering accurate and timely data for an enhanced healthcare
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="stripes bg-slate-50 py-10 mt-16">
                <p className="opacity-50 text-center">This is shown only in edit mode</p>
                {/* <img
                    srcSet="/assets/social@2x-ebb2c588dc57b9dc670dcaacea9014dc1fbe74c129afee38d93e4c9586e29a94.png 2x"
                    alt="Pricing"
                    className="mx-auto mb-4 mt-8"
                    src="/assets/social-f275aee48525890b40750fb69e99e070d47e2b94f08204bac72876cfb90cc75e.png"
                /> */}
                <p className="text-3xl text-center my-4 font-semibold opacity-90">
                    Social Links
                </p>
                <p className="max-w-4xl mx-auto opacity-70 leading-relaxed text-center">
                    Add links to your social accounts so your customers and visitors can find
                    you on all platforms
                </p>
                <div
                    className="text-center bg-amber-100 hover:bg-amber-50 hover:ring-amber-100 text-amber-700 cursor-pointer rounded-lg shadow shadow-slate-600/5 ring-1 ring-amber-200 px-6 py-2.5 w-fit mx-auto mt-8"

                >
                    Add social links
                </div>
            </div>
            <div
                className="w-full mx-auto mt-12 sm:mt-32"
                style={{ background: "rgba(207, 92, 246, 0.08)" }}
            >
                <div>
                    <section className="py-16 px-5 relative overflow-hidden sm:pt-32">
                        <div className="mx-auto items-center flex flex-col gap-2 sm:gap-4 max-w-4xl">
                            <h2 className="text-3xl sm:text-5xl md:leading-tight text-center font-bold">
                                Patient's Recovery, Simplified.
                            </h2>
                            <div className="mb-16 mt-8 text-center">
                                <section className="relative">
                                    <h2 className="mb-3 text-2xl sm:text-2xl font-custom font-bold max-w-4xl md:leading-tight">
                                        Increase your patients care
                                    </h2>
                                    <div className="">
                                        <form
                                            className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap"
                                            action="/subscribe"
                                            acceptCharset="UTF-8"
                                            method="post"
                                        >
                                            <input
                                                type="hidden"
                                                name="authenticity_token"
                                                defaultValue="jV0Re1V4zDZHBT6ZGJJY_OOTREWSruPGkyRjKzxhASLz5o2xqdkJbjEFno8GCpDfZUHDQ-ej6OrlHNiwvswOvA"
                                                autoComplete="off"
                                            />
                                            <input
                                                type="hidden"
                                                name="iframe_id"
                                                id="iframe_id"
                                                defaultValue="txz6kwir"
                                                autoComplete="off"
                                            />
                                            <label className="sr-only" htmlFor="email">
                                                Email address
                                            </label>
                                            <input
                                                autoComplete="email"
                                                required="required"
                                                className="flex-auto rounded-lg border-0 bg-white px-6 py-3.5 shadow-sm ring-1 ring-black/10 focus:ring-2 w-full focus:ring-black/10 text-slate-900 text-base sm:text-xl sm:leading-6"
                                                placeholder="Phone no. "
                                                type="email"
                                                name="email"
                                                id="email"
                                            />
                                            <input
                                                type="submit"
                                                name="commit"
                                                defaultValue="Book a Demo"
                                                className="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white"
                                                style={{ backgroundColor: "#692cf3" }}
                                                data-disable-with="Book a Demo"
                                            />
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="max-w-6xl py-10 flex flex-col text-lg px-5 gap-3 sm:gap-8 mx-auto">
                    <div className="text-sm">
                        <div className="flex justify-center gap-4 py-2.5"></div>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <span className="opacity-40">
                                © 2023 © 2023 Track and Improve Patient Recovery All Rights Reserved.
                                All rights reserved.
                            </span>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}