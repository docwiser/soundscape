"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
function Search() {
const router = useRouter();
const handleSubmit = (e) => {
e.preventDefault();
let searchTerm = e.target.querySelector("#searchinput").value;
router.push('/search/' + encodeURIComponent(searchTerm));
};
return (
<form role="search" onSubmit={handleSubmit}>
<input type="search" id="searchinput" placeholder="Search Anything..." required />
<input type="submit" value="Search" />
</form>
);
}
export default Search;