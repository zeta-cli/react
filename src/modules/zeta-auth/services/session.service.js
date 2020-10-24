/*
 * sessionService.file is part of the Zeta distribution (https://gitlab.com/zeta-cli/zeta.git).
 * Copyright (c) 2020 Antonio Hermosilla.
 *
 * sessionService.program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * sessionService.program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with sessionService.program. If not, see <http://www.gnu.org/licenses/>.
 */

const APP_SESSION = 'zeta-session';

const sessionService = {

  /**
   * Create session user.
   */
  createSession() {
    localStorage.setItem(APP_SESSION, JSON.stringify({}));
  },

  /**
   * Remove session.
   */
  removeSession() {
    // localStorage.clear(); remove all data
    localStorage.removeItem(APP_SESSION);
  },

  /**
   * Get session.
   *
   * @returns {object} Session object.
   */
  getSession() {
    if (!localStorage.getItem(APP_SESSION)) {
      sessionService.createSession();
    }
    const sessionInfo = localStorage.getItem(APP_SESSION);
    return JSON.parse(sessionInfo);
  },

  /**
   * Set session.
   *
   * @param {object} session Session
   */
  setSession(session) {
    localStorage.setItem(APP_SESSION, JSON.stringify(session));
  },

  /**
   * Get data from session user
   *
   * @param {object} key Key
   * @returns {object} Value
   */
  getFromSession(key) {
    return sessionService.getSession()[key];
  },

  /**
   * Save data in session user
   *
   * @param {object} data New object to save
   */
  setInSession(data) {
    sessionService.setSession(Object.assign(sessionService.getSession(), data));
  },

  /**
   * Remove from session.
   *
   * @param {string} key Remove key from session.
   */
  removeFromSession(key) {
    sessionService.setInSession({ [key]: undefined });
  },
};

export const { setInSession } = sessionService;
export const { getFromSession } = sessionService;
export const { removeFromSession } = sessionService;
export default sessionService;
