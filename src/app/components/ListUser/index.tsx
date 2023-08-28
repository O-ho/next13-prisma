import React from "react";
import { trpc } from "@/app/util/trpc";

const ListUser = () => {
  const { data, isLoading, isFetching } = trpc.getUsers.useQuery();
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  return <div>{data?.map((user) => <div key={user.id}>{user.name}</div>)}</div>;
};

export default ListUser;
