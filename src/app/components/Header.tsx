"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Nav = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const LoginButton = styled.button`
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.7);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: white;
  outline: none;
  border: none;
  font-size: 1rem;
  box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:active {
    transform: translateX(4px) translateY(4px);
    box-shadow: none;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const CTA = styled(LoginButton)`
  display: flex;
  margin-left: 1rem;
`;
const LinkButton = styled.div`
  text-decoration: underline;
  text-underline-offset: 5px;
  font-size: 1.2rem;
  margin-left: 1rem;
  color: #252b48;
`;
type BlackConsumer = {
  isBlack: boolean;
};
const User = styled.p<BlackConsumer>`
  font-size: 1.2rem;
  color: ${(props) => (props.isBlack ? "red" : "#3f1d38")};
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #3f1d38;
`;
const Title = styled.h1`
  letter-spacing: 0.2rem;
`;
const TITLE = "SUPER-STAR TOP6";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) => false;

  const { data: session, status } = useSession();
  const isBlack = session?.user?.email === "bjkim0228@naver.com";

  let left = (
    <div className="left">
      <LinkStyled href="/">
        <Title>{TITLE}</Title>
      </LinkStyled>
    </div>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <div className="left">
        <LinkStyled href="/">
          <Title>{TITLE}</Title>
        </LinkStyled>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }
  if (!session) {
    right = (
      <div className="right">
        <LinkStyled href="/api/auth/signin">
          <LoginButton>
            <p>LOGIN</p>
          </LoginButton>
        </LinkStyled>
      </div>
    );
  }
  if (session) {
    left = (
      <Left>
        <LinkStyled href="/">
          <Title>{TITLE}</Title>
        </LinkStyled>
        <LinkStyled href="/drafts">
          <LinkButton>POSTS</LinkButton>
        </LinkStyled>
        <LinkStyled href="/">
          <LinkButton>내가 쓴 글</LinkButton>
        </LinkStyled>
      </Left>
    );
    right = (
      <Right>
        <User isBlack={isBlack}>
          {isBlack ? "퍼킹블랙컨슈머 " : null}
          {session.user?.name} ({session.user?.email})
        </User>
        <LinkStyled href="/create">
          <CTA>POSTING</CTA>
        </LinkStyled>
        <LinkStyled href="/api/auth/signout">
          <CTA>LOGOUT </CTA>
        </LinkStyled>
      </Right>
    );
  }

  return (
    <Nav>
      {left}
      {right}
    </Nav>
  );
};

export default Header;
