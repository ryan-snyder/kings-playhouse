/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { builder, Builder } from "@builder.io/react";

builder.init('18d705a1954e4170b937d51ac7788541'); // <-- add your Public API Key here
/**
 * Example header connected with builder.io
 * Might not be needed
Builder.registerComponent(header, {
  name: 'Header',
  inputs: [
    {
      name: 'links', 
      type: 'list',
      subFields: [
              {
                name: 'url',
                type: 'string',
                defaultValue: '/home',
                required: true
              },
              {
                name: 'label',
                type: 'string',
                defaultValue: 'Home',
                required: true
              }
            ],
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
    },
    {
      name: 'size',
      type: 'object',
      subFields: [
        {
          name: 'width',
          type: 'number',
          defaultValue: 300,
          required: true
        },
        {
          name: 'height',
          type: 'number',
          defaultValue: 200,
          required: true
        },
      ]
    }
  ]
})
*/
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
