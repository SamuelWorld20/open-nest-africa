import React from "react";
import AuthLayout from "../component/AuthLayout";
import Button from "../../../components/Button";
import TextField from "../../../components/form/TextField";
import { FormDivider } from "../../../components/FormDivider";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<AuthLayout
			title="Sign in"
			className="flex-col gap-5 w-full max-w-md mx-auto"
		>
			<div className="flex flex-col gap-8">
				<p className="text-2xl font-semibold">Login with your email</p>
				<form action="">
					<TextField className="border-dark outline-dark" />
				</form>
				<Button
					text="Login"
					className="bg-blue text-white text-base font-semibold px-[114px] py-4 text-center"
				/>
				<FormDivider text={"or"} />
				<div className="flex flex-col gap-3">
					<Button
						icon="/images/github-logo.svg"
						text="Continue with Github"
						className="bg-white text-black text-base font-semibold px-[114px] py-4 text-center border border-dark rounded-md"
					/>
					<Button
						icon="/images/google-logo.svg"
						text="Continue with Google"
						className="bg-white text-black text-base font-semibold px-[114px] py-4 text-center border border-dark rounded-md"
					/>
				</div>
				<p className="text-sm text-[#667185]">
					Are you new here?{" "}
					<Link to="/signup" className="text-blue">
						Create account
					</Link>
				</p>
			</div>
		</AuthLayout>
	);
};

export default Login;
