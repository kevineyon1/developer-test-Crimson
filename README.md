## Instalasi

 1. Buka terminal di Laragon, clone project ini dengan perintah
  ```
git clone https://github.com/kevineyon1/developer-test-Crimson
cd crimsontest-webapp-peminjamanbukusekolah
```
 2. Jalankan composer & npm to memasang semua dependency:
  ```
composer install
npm install 
```
3.  Buat database untuk projectnya:  **Menu > MySQL > Create database**  
    for example: db-crimson-pinjambuku
    
 4.  Buat file .env dari .env.example
 ```
cp .env.example .env
```
4. Ubah nama DB_DATABASE pada file .env dengan nama database yang sudah dibuat tadi
```
DB_CONNECTION=mysql          
DB_HOST=127.0.0.1            
DB_PORT=3306                 
DB_DATABASE=db-crimson-pinjambuku      
DB_USERNAME=root             
DB_PASSWORD= 
```
5. Generate application key pada .env
```
php artisan key:generate
```
6. Mengaktifkan Public Storage
```
php artisan storage:link
```

## Perintah Lainnya (Dijalankan tiap fetch/merge branch main)
#### Database Migration
Untuk mengupdate database ketika ada perubahan pada migration file/seeder
```
php artisan migrate:refresh --seed
```
#### Generate Laravel Passport
Wajib dijalankan setelah refresh database
```
php artisan passport:install
```
#### Compile CSS dan JS
```
npm run dev
```
