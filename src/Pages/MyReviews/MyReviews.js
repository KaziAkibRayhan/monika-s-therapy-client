import { Button, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data.data);
        setRefresh(!refresh);
      })
      .catch((error) => console.error(error));
  }, [user?.email, refresh]);

  const handleDeleteReview = (_id) => {
    const proceed = window.confirm("Are you sure delete this review?");
    if (proceed) {
      fetch(`http://localhost:5000/myReviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast(data.message);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      {myReviews.length === 0 ? (
        <h3 className="text-4xl text-center my-28 text-pink-500 font-bold">
          No reviews were added.
        </h3>
      ) : (
        <>
          <Table striped={true}>
            <Table.Head>
              <Table.HeadCell>Service Name</Table.HeadCell>
              <Table.HeadCell>Review</Table.HeadCell>
              <Table.HeadCell>Reviwer Image</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {myReviews?.map((myReview) => (
                <Table.Row
                  key={myReview._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {myReview.serviceName}
                  </Table.Cell>
                  <Table.Cell>{myReview.text}</Table.Cell>
                  <Table.Cell>
                    <img
                      className="w-10 h-10 rounded-xl"
                      src={myReview.photo}
                      alt=""
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-evenly">
                      <Button
                        onClick={() => handleDeleteReview(myReview._id)}
                        color={"failure"}
                      >
                        Delete Review
                      </Button>
                      <Button>Edit Review</Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </div>
  );
};

export default MyReviews;
