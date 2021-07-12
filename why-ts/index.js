"use strict";

const url = "https://jsonplaceholder.typicode.com/users/1";

const $root = document.querySelector(".container");

/**
 * @returns {Promise<User>}
 */
const fetchUser = async () => {
  const data = await fetch(url);
  const fetchedUser = await data.json();

  return fetchedUser;
};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {Address} address
 */

/**
 * @param {HTMLElement} $parentElem
 * @param {User} user
 */
const renderUser = ($parentElem, user) => {
  const $fragment = document.createDocumentFragment();

  const { name, email, phone, address } = user;

  const $name = document.createElement("div");
  const $email = document.createElement("div");
  const $phone = document.createElement("div");
  const $address = document.createElement("div");

  $name.innerText = `Name: ${name}`;
  $email.innerText = `Email: ${email}`;
  $phone.innerText = `Phone: ${phone}`;
  $address.innerText = `Address: ${address.street} street ${address.city} city`

  $fragment.append($name, $email, $phone, $address);

  $parentElem.append($fragment);
};

const init = async () => {
  const user = await fetchUser();

  renderUser($root, user);
};

init();
