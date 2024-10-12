import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const AdminPetCard = ({ pet }) => {
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleted = await fetch(
          `http://localhost:3000/admin-dashboard/adoptions/api/adoption/${id}`,
          {
            method: "DELETE",
          }
        );
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
          Swal.fire("Deleted!", "Adoption has been deleted.", "success").then(
            () => {
              window.location.reload(); // Force hard reload after deletion
            }
          );
        }
      }
    });
  };
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <Image
          className="w-full h-64 object-cover"
          src={pet.image}
          alt={pet.petName}
          width={500}
          height={300}
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm">
          {pet.gender}
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-blue-800 px-3 py-1 rounded-full font-bold text-sm">
          {pet.age} years
        </div>
      </div>
      <div className="px-6 py-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="font-bold text-3xl mb-2 text-blue-800">
          {pet.petName}
        </div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold text-blue-600">Location:</span>{" "}
          {pet.location}
        </p>
        <p className="text-gray-700 text-base line-clamp-3">
          <span className="font-semibold text-blue-600">About:</span>{" "}
          {pet.description}
        </p>
      </div>
      <div className="px-6 pt-2 pb-4 bg-white">
        <div className="flex flex-wrap gap-2">
          {["loving", "playful", "friendly"].map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 bg-white flex justify-between">
        <button
          onClick={() => handleDelete(pet._id)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminPetCard;
