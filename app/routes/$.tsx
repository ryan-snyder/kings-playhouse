import { BuilderComponent, builder } from "@builder.io/react";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

// Initialize the Builder client and pass in your Public API Key
builder.init('18d705a1954e4170b937d51ac7788541'); // <-- add your Public API Key here

// Fetch contents of the page
export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  // Fetch data content from Builder.io based on the URL path
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: `/${params["*"]}`,
      },
    })
    .toPromise();
   const header = await builder
    .get('header', {
      userAttributes: {
        urlPath: '/' + params['*'],
      },
    })
    .toPromise();
  // Verify the user is previewing or editing in Builder
  const isPreviewing = new URL(request.url).searchParams.has("builder.preview");
  console.log(header)
  // If the page is not found and the user is not previewing, throw a 404.
  // The CatchBoundary component will catch the error
  if (!page && !isPreviewing) {
    throw new Response("Page Not Found", {
      status: 404,
      statusText:
        `We couldn't find this page, please check your url path and if the page is published on Builder.io. Got Page: ${page}`,
    });
  }

  return { page, header};
};

// Define and render the page.
export default function Page() {
  // Use the useLoaderData hook to get the Page data from `loader` above.
  const { page, header} = useLoaderData<typeof loader>();

  // Render the page content from Builder.io
  return (
        <div>
            <BuilderComponent model = "header" content={header} />
            <BuilderComponent model="page" content={page} />
        </div>
  );
}