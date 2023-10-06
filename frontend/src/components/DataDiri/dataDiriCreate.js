import React from "react";

const DataDiriCreate = () => {
  return (
    <div className="bg-gray-200 h-auto box-border p-4">
      <div className="flex justify-center items-center mt-5">
        <h1>
          <b>Data Diri</b>
        </h1>
      </div>
      <div className="flex justify-center items-center p-2 mt-5">
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-8/12 h-auto">
          <form>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Nama</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="bg-gray-300 input input-bordered input-sm w-2/3"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-2">
                <span className="label-text">Tempat Lahir</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Tempat Lahir"
                className="bg-gray-300 input input-bordered input-sm w-2/3"
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Tanggal Lahir</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="bg-gray-300 input input-bordered input-sm w-1/2"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Jenis Kelamin</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <label className="mr-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-1"
                    />
                    Laki-laki
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-1"
                    />
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Tinggi Badan</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="bg-gray-300 input input-bordered input-sm w-1/12"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Berat Badan</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="bg-gray-300 input input-bordered input-sm w-1/12"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Alamat</span>
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Alamat lengkap..."
                  className="bg-gray-300 input input-bordered input-sm w-1/2 h-20"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Agama</span>
                </label>
                <select
                  className="bg-gray-300 input input-sm input-bordered w-1/2"
                  size="1"
                >
                  <option value="">Pilih Agama...</option>
                  <option value="Islam">Islam</option>
                  <option value="Kristen">Kristen</option>
                  <option value="Katolik">Katolik</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Buddha">Buddha</option>
                  <option value="Konghucu">Konghucu</option>
                </select>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/3 mr-1">
                <span className="label-text">Status</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Contoh : Mahasiswa"
                className="bg-gray-300 input input-bordered input-sm w-2/3"
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Email</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="email@contoh.com"
                  className="bg-gray-300 input input-bordered input-sm w-2/3"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <label className="w-1/3 mr-1">
                  <span className="label-text">Telepon</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+62..."
                  className="bg-gray-300 input input-bordered input-sm w-2/3"
                />
              </div>
            </div>
            <div className="box-border">
              <div className="mb-4 grid grid-cols-3">
                <label className="mr-1 mb-3">
                  <span className="label-text">Media Sosial</span>
                </label>
                <div>
                  <div className="mb-4">
                    <label className="mr-5">
                      <span className="label-text">Instagram</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="bg-gray-300 input input-bordered input-sm w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mr-5">
                      <span className="label-text">LinkedIn</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="bg-gray-300 input input-bordered input-sm w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="mr-5">
                      <span className="label-text">Github</span>
                    </label>
                    <input
                      type="text"
                      placeholder="username"
                      className="bg-gray-300 input input-bordered input-sm w-full"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="mt-10 flex justify-center items-center">
              <button className="btn btn-error btn-sm mr-2 w-1/3">
                Cancel
              </button>
              <button className="btn btn-success btn-sm w-1/3">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto text-center p-2"></div>
    </div>
  );
};

export default DataDiriCreate;
