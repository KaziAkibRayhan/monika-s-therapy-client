import { Table } from "flowbite-react";
import React from "react";

const Blogs = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl mb-7 underline">
          Some common questions and their answers...
        </h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Difference between SQL and NoSQL?
            </summary>
            <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              <h4 className="text-3xl">Answer:</h4>
              <Table striped={true}>
                <Table.Head>
                  <Table.HeadCell> SQL</Table.HeadCell>
                  <Table.HeadCell> NoSQL</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Relational Database
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Non-relational Database
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Use structured query language and have apredefined schema.
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      NoSQL databases have dynamic schemas for unstructured
                      data.
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      are vertically scalable are table based
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      are horizontally scalable. are document, key-value, |
                      graph or wide-column stores.
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      are better for multi-row transactions
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      are better for unstructured data like documents or JSON.
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is JWT, and how does it work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              <span className="font-bold">What is JWT? ==</span>
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed.
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              <span className="font-bold">How does it work? == </span>
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key. User
              sign-in using username and password or google/facebook.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the difference between javascript and NodeJS?
            </summary>
            <div>
              <h4 className="text-3xl">Answer:</h4>
              <Table striped={true}>
                <Table.Head>
                  <Table.HeadCell> Javascript</Table.HeadCell>
                  <Table.HeadCell> NodeJS</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Javascript is a programming language that is used for
                      writing scripts on the website.
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      NodeJS is a Javascript runtime environment.
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Javascript can only be run in the browsers.
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      We can run Javascript outside the browser with the help of
                      NodeJS.
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      It is basically used on the client-side.
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      It is mostly used on the server-side.
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      It is the upgraded version of ECMA script that uses
                      Chrome’s V8 engine written in C++.
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Nodejs is written in C, C++ and Javascript.
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does NodeJS handle multiple requests at the same time?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
