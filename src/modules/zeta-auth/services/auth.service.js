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
import { getUser, setUser, removeUser } from './user.service';

const authService = {

  isAuthenticated() {
    return !!getUser();
  },

  /**
   * Auth service
   *
   * @param {{email: string, password: string}} credentials Credential
   * @returns {Promise<import('./user.service').User>} User
   */
  async auth(credentials) {
    if (credentials.email === 'hermosilla.antonio@gmail.com' && credentials.password === '1234') {
      return setUser({ username: credentials.email, jwt: 'token', roles: [] });
    }
    return null;
  },

  /**
   * Data
   *
   * @returns {Promise} Promise
   */
  async signOut() {
    if (authService.isAuthenticated) {
      removeUser();
    }
  },

};

export default authService;
