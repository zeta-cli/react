/*
 * This file is part of the Zeta distribution (https://gitlab.com/zeta-cli/zeta.git).
 * Copyright (c) 2020 Antonio Hermosilla.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// @ts-check

/**
 * Application User.
 *
 * @typedef {object} User
 * @property {string} username Username.
 * @property {string} jwt Json Web Token
 * @property {Array} roles User's roles.
 * @property {Date} [lastUpdate] Last update.
 */

import { setInSession, getFromSession, removeFromSession } from './session.service';

/**
 * Set User
 *
 * @param {User} user User object
 * @returns {User} User Information
 */
export function setUser(user) {
  if (user && typeof user === 'object') {
    Object.assign(user, { lastUpdate: new Date() });
    setInSession({ user });
    return user;
  }
  return null;
}

/**
 * Get User
 *
 * @returns {User} User Information
 */
export const getUser = () => getFromSession('user');

/**
 * Remove user
 *
 * @returns {void}
 */
export const removeUser = () => removeFromSession('user');
