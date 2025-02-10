import {LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
	return (
		<div className="flex gap-4">
			<LoginLink>Sign in</LoginLink>

			<RegisterLink>Sign up</RegisterLink>
		</div>
	);
}
