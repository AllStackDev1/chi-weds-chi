import React, { Suspense } from "react"
import Link from "next/link"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/users/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import { Image, Stack } from "@chakra-ui/react"
import Header from "../app/core/components/Header"
import Headings from "../app/core/components/Headings"
import CTA from "../app/core/components/CTA"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href={Routes.LoginPage()}>
          <a className="button small">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Header image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <Image src="/slider-2.png" alt="slider" />
      </Header>

      <Stack py={{ base: 16, md: "10rem" }} spacing={{ base: 8, md: "12rem" }}>
        <Headings
          standout="BEGINNING OF TRUE LOVE"
          title="A short timeline of our story"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi
            dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud."
        />
      </Stack>

      <CTA
        btnTitle="RSVP"
        subtitle="LINE WILL BE OPEN UNTIL SEPTEMBER 1ST"
        title="Please, take a moment and respond to our invitation."
      />
    </Layout>
  )
}

export default Home
