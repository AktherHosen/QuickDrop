import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import Select from "react-select";
import { Fragment } from "react";

const UserModal = ({ setIsOpen, isOpen, modalHandler, selectedUser }) => {
  const options = [
    { value: "admin", label: "admin" },
    { value: "deliveryman", label: "deliveryman" },
    { value: "user", label: "user" },
  ];

  const selectedRole = {
    value: selectedUser.role,
    label: selectedUser.role,
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* Background Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        {/* Modal Content */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <Description>Update Role</Description>
              <div className="min-w-2xl">
                <Select options={options} value={selectedRole} />
              </div>
              <div className="flex gap-4">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-green-700 text-white px-2 py-1.5 rounded-sm"
                >
                  Save
                </button>
              </div>
            </DialogPanel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserModal;
