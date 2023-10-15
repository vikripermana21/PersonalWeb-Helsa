-- Create database

CREATE DATABASE postgres;

-- Create tables
CREATE TYPE role_enum AS ENUM ('Admin', 'User');
CREATE TABLE akun (
    id_akun SERIAL PRIMARY KEY,
    nama VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role role_enum, 
    refresh_token TEXT 
);

CREATE TYPE agama_enum AS ENUM ('Islam', 'Kristen', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya');
CREATE TYPE jenis_kelamin_enum AS ENUM ('Laki-Laki', 'Perempuan');
CREATE TABLE data_diri (
    id_person SERIAL PRIMARY KEY,
    foto TEXT,
    nama VARCHAR(50) NOT NULL,
    tempat_lahir VARCHAR(50),
    tanggal_lahir DATE,
    usia INT,
    tinggi_badan DECIMAL(5,2),
    berat_badan DECIMAL(5,2),
    alamat TEXT,
    agama agama_enum,
    jenis_kelamin jenis_kelamin_enum,
    telp VARCHAR(15),
    email VARCHAR(100),
    status VARCHAR(20),
    instagram VARCHAR(20),
    linkedin VARCHAR(20),
    github VARCHAR(20),
    id_akun INT
);

CREATE TABLE organisasi (
    id_organisasi SERIAL PRIMARY KEY,
    id_person INT,
    nama_organisasi VARCHAR(50) NOT NULL,
    posisi VARCHAR(50),
    tanggal_mulai_menjabat DATE,
    tanggal_akhir_menjabat DATE
);

CREATE TABLE pendidikan (
    id_pendidikan SERIAL PRIMARY KEY,
    id_person INT,
    instansi_pendidikan VARCHAR(50) NOT NULL,
    jurusan VARCHAR(50) NOT NULL,
    tahun_mulai_ajaran DATE,
    tahun_akhir_ajaran DATE
);

CREATE TABLE portofolio (
    id_portofolio SERIAL PRIMARY KEY,
    id_person INT,
    nama_portofolio VARCHAR(50),
    deskripsi_portofolio TEXT,
    file_portofolio TEXT
);

CREATE TABLE skill (
    id_skill SERIAL PRIMARY KEY,
    id_person INT,
    nama_skill VARCHAR(50) NOT NULL,
    capability TEXT
);

-- Foreign key constraints


-- Drop foreign key constraints

ALTER TABLE data_diri DROP CONSTRAINT IF EXISTS data_diri_id_pendidikan_fk;
ALTER TABLE data_diri DROP CONSTRAINT IF EXISTS data_diri_id_organisasi_fk;
ALTER TABLE data_diri DROP CONSTRAINT IF EXISTS data_diri_id_portofolio_fk;
ALTER TABLE data_diri DROP CONSTRAINT IF EXISTS data_diri_id_skill_fk;
ALTER TABLE data_diri DROP CONSTRAINT IF EXISTS data_diri_id_akun_fk;
ALTER TABLE organisasi DROP CONSTRAINT IF EXISTS organisasi_id_person_fk;
ALTER TABLE pendidikan DROP CONSTRAINT IF EXISTS pendidikan_id_person_fk;
ALTER TABLE portofolio DROP CONSTRAINT IF EXISTS portofolio_id_person_fk;
ALTER TABLE skill DROP CONSTRAINT IF EXISTS skill_id_person_fk;
ALTER TABLE akun DROP CONSTRAINT IF EXISTS akun_id_person_fk;

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

DROP TYPE IF EXISTS "public"."enum_akun_role";



-- Drop database

DROP DATABASE IF EXISTS postgres;

-- Drop tables

DROP TABLE IF EXISTS skill;
DROP TABLE IF EXISTS data_diri;
DROP TABLE IF EXISTS portofolio;
DROP TABLE IF EXISTS pendidikan;
DROP TABLE IF EXISTS organisasi;
DROP TABLE IF EXISTS akun;
DROP TABLE IF EXISTS admin;

DELETE FROM personal WHERE id_person=1;