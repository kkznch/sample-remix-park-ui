import type { MetaFunction } from "@remix-run/node";
import { hoge } from "ui"

export const meta: MetaFunction = () => {
	return [
		{ title: "テストですー" },
		{ name: "description", content: "テストのdescriptionですー" },
	];
};

export default function Index() {
  hoge();

	return (
		<div>
      <h1>テストですー</h1>
		</div>
	);
}
