import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserBookings: builder.query({
      query: () => ({
        url: `/bookings/user`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),

    getBookingById: builder.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: `/bookings`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
  }),
});

export default bookingApi;
